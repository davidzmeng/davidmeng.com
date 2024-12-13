window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-X3WXRWZE6N');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'click', {
          'event_category': 'Links',
          'event_label': link.href
        });
      });
    });
  });