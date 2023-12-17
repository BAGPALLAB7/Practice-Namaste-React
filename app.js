      import React from 'react';
      import ReactDOM from 'react-dom/client';
      
      const heading = React.createElement('div', { id: "container" },
          [React.createElement('h1', {}, "Nested Heading"),
          React.createElement('div', { id: "text" }, 
          [ React.createElement('p', {}, "Nested multiple paragraph first"),React.createElement('p', {}, "Nested multiple paragraph second")]
          )
        ])


      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);

