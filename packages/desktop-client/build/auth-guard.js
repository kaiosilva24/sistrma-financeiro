(function() {
  var ROTAS_BLOQUEADAS = ['/login', '/bootstrap', '/config-server'];

  function eRotaBloqueada(p) {
    for (var i = 0; i < ROTAS_BLOQUEADAS.length; i++) {
      if (p === ROTAS_BLOQUEADAS[i] || p.startsWith(ROTAS_BLOQUEADAS[i] + '/')) {
        return true;
      }
    }
    return false;
  }

  function bloquearSeNecessario() {
    var p = window.location.pathname;
    if (eRotaBloqueada(p)) {
      localStorage.removeItem('sf-session');
      window.location.replace('/entrar');
      return true;
    }
    return false;
  }

  // 1) Bloqueia imediatamente se vier em rota proibida
  if (bloquearSeNecessario()) return;

  // 2) Sem sessao? Vai para /entrar
  if (!localStorage.getItem('sf-session')) {
    window.location.replace('/entrar');
    return;
  }

  // 3) Intercepta pushState e replaceState do React Router
  var origPush = history.pushState;
  history.pushState = function() {
    origPush.apply(this, arguments);
    bloquearSeNecessario();
  };
  var origReplace = history.replaceState;
  history.replaceState = function() {
    origReplace.apply(this, arguments);
    bloquearSeNecessario();
  };
  window.addEventListener('popstate', bloquearSeNecessario);

  // 4) Polling a cada 300ms para pegar navegacoes async do React Router
  setInterval(bloquearSeNecessario, 300);
})();
