(function() {
  var ROTAS_BLOQUEADAS = ['/login', '/bootstrap', '/config-server'];
  var _redirecionando = false;

  function eRotaBloqueada(p) {
    for (var i = 0; i < ROTAS_BLOQUEADAS.length; i++) {
      if (p === ROTAS_BLOQUEADAS[i] || p.startsWith(ROTAS_BLOQUEADAS[i] + '/')) {
        return true;
      }
    }
    return false;
  }

  function bloquearSeNecessario(limparSessao) {
    if (_redirecionando) return false;
    var p = window.location.pathname;
    if (eRotaBloqueada(p)) {
      _redirecionando = true;
      // So limpa sf-session se explicitamente solicitado (logout real)
      if (limparSessao) {
        localStorage.removeItem('sf-session');
      }
      window.location.replace('/entrar');
      return true;
    }
    return false;
  }

  // 1) Bloqueio imediato para navegacao direta (hard navigation)
  if (bloquearSeNecessario(true)) return;

  // 2) Sem sessao? Vai para /entrar
  if (!localStorage.getItem('sf-session')) {
    window.location.replace('/entrar');
    return;
  }

  // 3) Intercepta pushState e replaceState do React Router
  //    Nao remove sf-session pois pode ser boot temporario do React
  var origPush = history.pushState;
  history.pushState = function() {
    origPush.apply(this, arguments);
    bloquearSeNecessario(false);
  };
  var origReplace = history.replaceState;
  history.replaceState = function() {
    origReplace.apply(this, arguments);
    bloquearSeNecessario(false);
  };
  window.addEventListener('popstate', function() { bloquearSeNecessario(false); });

  // 4) Polling so começa apos 8 segundos (graca para o React validar o token)
  //    Depois disso detecta logout real e redireciona
  setTimeout(function() {
    setInterval(function() {
      // Apos boot completo: se token invalido o React navega para /login
      // Nesse ponto é um logout/sessao expirada real → limpa sessao
      bloquearSeNecessario(true);
    }, 500);
  }, 8000);
})();
