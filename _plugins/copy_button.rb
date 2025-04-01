# _plugins/copy_button.rb
module Jekyll
    module CopyButton
      def add_copy_button(input)
        input.gsub(/<pre><code class="(.*?)">/, '<div class="code-wrapper"><button class="copy-button" onclick="copyCode(this)">Copy</button><pre><code class="\1">')
             .gsub(/<\/code><\/pre>/, '</code></pre></div>')
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::CopyButton)