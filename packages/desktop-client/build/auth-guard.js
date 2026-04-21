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
      if (limparSessao) localStorage.removeItem('sf-session');
      window.location.replace('/entrar');
      return true;
    }
    return false;
  }

  // 1) Bloqueio imediato para hard navigation direta a rota bloqueada (ex: usuario digita /login na barra)
  if (bloquearSeNecessario(true)) return;

  // 2) Sem sessao? Vai para /entrar
  if (!localStorage.getItem('sf-session')) {
    window.location.replace('/entrar');
    return;
  }

  // 3) SEM interceptores de pushState/replaceState
  //    O React usa history.replaceState internamente durante o boot e isso causava loop infinito.
  //    O polling abaixo e suficiente para detectar logout real apos o boot.

  // 4) Polling so começa apos 10 segundos de graca para o React validar o token no IndexedDB
  //    Apos 10s, se o React navegar para /login = logout real = redireciona para /entrar
  setTimeout(function() {
    _redirecionando = false; // Reset para permitir redirecionamento real apos boot
    setInterval(function() {
      bloquearSeNecessario(true);
    }, 1000);
  }, 10000);
})();
