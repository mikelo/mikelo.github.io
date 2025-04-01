document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
      // Create container to hold the code block and the copy button
      const container = document.createElement('div');
      container.className = 'code-container';
      
      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = 'Copy';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      
      // Insert the container
      const parent = codeBlock.parentNode;
      parent.parentNode.insertBefore(container, parent);
      container.appendChild(parent);
      container.appendChild(copyButton);
      
      // Add click event
      copyButton.addEventListener('click', function() {
        const code = codeBlock.textContent;
        navigator.clipboard.writeText(code).then(
          function() {
            // Success feedback
            copyButton.textContent = 'Copied!';
            setTimeout(function() {
              copyButton.textContent = 'Copy';
            }, 2000);
          },
          function() {
            // Error feedback
            copyButton.textContent = 'Failed!';
            setTimeout(function() {
              copyButton.textContent = 'Copy';
            }, 2000);
          }
        );
      });
    });
  });