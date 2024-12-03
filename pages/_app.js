//@ plugin
import 'bootstrap/dist/css/bootstrap.css'
//@ SCSS (all)
import '../src/assets/stylesheet/all.scss'
//@ *
import React, { useState } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  let router = useRouter()
  router.onbeforeunload = function () {
    return "确定离开";
  }
  router.onbeforeunload = function () {
    return "alert('WWW')";
  }
  return <>
    <Head><link rel="icon" href="/favicon.ico" /></Head>
    <div id="fb-root" style={{ display: 'none' }}></div>

    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    {/* <Script>
      {`var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "116435126424428");
      chatbox.setAttribute("attribution", "biz_inbox");`}
    </Script>
    <Script>
      {`window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
    </Script> */}
    <Script type="application/javascript">
      {` window.eightChatConfig = {encryptedOrgId: '96m2QDaRmURUWA==', env: 'prod', launchLocation: 'https://live-chat-console.no8.io' };
      (function () {
	var eightChatId = 'eight-chat-script';
      if (document.getElementById(eightChatId)) {
		return;
	}
      var firstScriptElement = document.getElementsByTagName('script')[0];
      var eightChatScriptElement = document.createElement('script');
      eightChatScriptElement.id = eightChatId;
      eightChatScriptElement.src = window.eightChatConfig.launchLocation +'/launch.js';
      firstScriptElement.parentNode.insertBefore(eightChatScriptElement, firstScriptElement);
})();`}
    </Script>
    <Component {...pageProps} />
  </>
}