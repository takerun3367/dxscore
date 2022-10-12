javascript:
  (

    function(d, s)

    {
      let i = location.hostname.indexOf('maimaidx.jp');
      if (i != -1)
      //ここまでがmaimainetかどうかの判定
      {
        let g = d.createElement('div');
        //[div]というオブジェクトにgという名前を付ける
        g.id = 'mai-score-bookmarklet';
        //[g]に「mai-score-bookmarklet」というIDを付与
        d.body.appendChild(g);
        //bodyに[g]を追加する

        let s = d.createElement('script');
        //[script]というオブジェクトにsという名前を付ける
        s.src = '//mai-score-bookmarklet.web.app/js/app.js' + '?' + Date.now();
        //[s]というオブジェクトで読み込むファイルの指定
        d.body.appendChild(s);
        //bodyに[s]を追加する

        let c = d.createElement('script');
        c.src = '//mai-score-bookmarklet.web.app/js/chunk.js' + '?' + Date.now();
        d.body.appendChild(c);
        
        //let a = d.createElement('link');
        //a.href = '//mai-score-bookmarklet.web.app/css/app.css' + '?' + Date.now();
        //a.rel = "stylesheet";
        //a.type = "text/css";
        //d.body.appendChild(a);
      }

    }

  )(document)
