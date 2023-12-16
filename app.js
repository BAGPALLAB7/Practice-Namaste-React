      const heading = React.createElement('div', { id: "container" },
          [React.createElement('h1', {}, "Nested Heading"),
          React.createElement('div', { id: "text" }, 
          [ React.createElement('p', {}, "Nested multiple paragraph 1"),React.createElement('p', {}, "Nested multiple paragraph 2")]
          )
        ])


      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);

