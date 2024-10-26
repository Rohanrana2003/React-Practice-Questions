import Entry from "./components/Entry"




const App = () => {

  const folders = {
    children: [
      {
        name: 'node_modules',
        children: [
          {
            name: 'Babel',
            children: [
              {
                name: 'node_modules',
                children: [
                  {
                    name: 'core-js'
                  },
                  {
                    name: 'regenerator-runtime'
                  }
                ]
              }
            ]
          },
          {
            name: 'React',
            children: [
              {
                name: 'node_modules',
                children: [
                  {
                    name: 'react-dom'
                  },
                  {
                    name: 'react-is'
                  }
                ]
              }
            ]
          },
          {
            name: 'Webpack',
            children: [
              {
                name: 'node_modules',
                children: [
                  {
                    name: 'webpack-cli'
                  },
                  {
                    name: 'webpack-dev-server'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'src',
        children: [
          {
            name: 'components',
            children: [
              {
                name: 'Header.jsx'
              },
              {
                name: 'Footer.jsx'
              },
              {
                name: 'Sidebar.jsx'
              }
            ]
          },
          {
            name: 'App.jsx'
          },
          {
            name: 'index.js'
          }
        ]
      },
      {
        name: 'public',
        children: [
          {
            name: 'index.html'
          },
          {
            name: 'favicon.ico'
          },
          {
            name: 'assets',
            children: [
              {
                name: 'logo.png'
              },
              {
                name: 'style.css'
              }
            ]
          }
        ]
      },
      {
        name: 'package.json'
      },
      {
        name: 'vite.config.ts'
      },
      {
        name: 'README.md'
      },
      {
        name: '.gitignore'
      }
    ]
  }
  

  return (
    <div className="font-bold bg-slate-600 w-screen min-h-screen text-white flex justify-center ">

      <div className="mt-20">
        {
          folders.children.map((entry, i) => (
            <Entry key={i} entry={entry} depth={0} />
          ))
        }
      </div>

    </div>
  )
}

export default App
