
// analytics.js
(function() {
var gtagScript = document.createElement("script");
gtagScript.async = true;
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-96WT9J5WCY";
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;

gtag("js", new Date());
gtag("config", "G-96WT9J5WCY");
})();

// SNSリンクボタンのクリックイベントをそれぞれトラッキング
document.querySelectorAll('.social-link').forEach(function(button) {
    button.addEventListener('click', function(event) {
      // #instagram-toggle だったら何もしない
        if (event.target.id === 'instagram-toggle') return;
      
        let eventLabel = '';

        
        // Instagramの選択肢（2つのInstagramリンク）
        if (button.href.includes('instagram.com/kay_codes')) {
            eventLabel = 'Instagram (coding)';
        } 
        // LinkedInリンク
        else if (button.href.includes('linkedin.com')) {
            eventLabel = 'LinkedIn';
        }
        // YouTubeリンク
        else if (button.href.includes('youtube.com')) {
            eventLabel = 'YouTube';
        }
        // Googleフォーム（Contactフォーム）
        else if (button.href.includes('docs.google.com')) {
            eventLabel = 'Contact Form';
        }
        // GitHub HOME
        else if (button.href.includes('https://github.com/kanamecode?tab=repositories')) {
            eventLabel = 'GitHub HOME';
        }
        // GitHub Project
        else if (button.href.includes('https://kanamecode.github.io/Photo-Booth-System/')) {
            eventLabel = 'GitHub Project';
        }
        else {
            // その他のリンクはテキストまたは画像altでラベル設定
            eventLabel = button.textContent.trim() || button.querySelector('img').alt;
        }

        // Google Analyticsにイベントを送信
        gtag('event', 'click', {
    'event_category': 'LINKs',
    'event_label': eventLabel,
    'value': 1
});


    });
});
