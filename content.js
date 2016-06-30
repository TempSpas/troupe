var context = document.querySelector("*"); 
var instance = new Mark(context);
instance.mark("Trump");


<span class='function' data-content="Some content" data-title="A title">Function 1</span>

// <script type="text/javascript">
  $(document).ready(function() {
    Tipped.create('.function', function(element) {
      return {
        title: $(element).data('title'),
        content: $(element).data('content')
      };
    }, {
      skin: 'light'
    });
  });
// </script>