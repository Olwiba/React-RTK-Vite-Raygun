![](https://assets-global.website-files.com/5e2701b416b6d176f5007781/6344bbf42c1388b9f34a5c6f_logo-colour-stylised-2.svg)

Welcome to the revamped FE POC for the Raygun application. 

## Implimented structure

Raygun.Website
✅ ├ 📂Content
✅ │ ├ 📂Fonts - fonts used on site
✅ │ └ 📂Images - generic images
✅ │ └ 📂Clientapp - React SPA application
🚧 │   ├ 📂dist - bundled output
🚧 │   ├ 📂Grunt
🚧 │   │ ├ 📂build 
🚧 │   │ │ ├ 📂config - All build configs for the app (webpack etc)
🚧 │   │ │ ├ 📂tasks - Individual build tasks for the app
🚧 │   │ │ └ 📄registerTasks.js - Registers aliases for grouped tasks
🚧 │   │ ├ 📂echarts - eCharts config & build tasks
🚧 │   │ ├ 📂generateSvgIcons - svgstore config & build tasks
🚧 │   │ ├ 📂tests - jsHint config & build tasks (we can add to this in future)
🚧 │   │ ├ 📂updateIcons - icomoon config & build tasks
🚧 │   │ ├ 📄generateConfig.js - import & merge all the configs into one
🚧 │   │ ├ 📄loadTasks.js - load tasks from task directories
🚧 │   │ └ 📄registerTasks.js - import all registerTasks files 
✅ │   ├ 📂Styles
✅ │   │ ├ 📂components - styles for components, mimics the js structure, split by folders
✅ │   │ │ ├ 📂charts - chart specific styles
✅ │   │ │ ├ 📂asteriod - allows for multiple design systems in future(?)
✅ │   │ │ │ ├ 📂atoms - atom styles
✅ │   │ │ │ ├ 📂molecules - molecule styles
✅ │   │ │ │ └ screen.scss - imports all atoms & molecule styles
✅ │   │ ├ 📂icons - icon styles (icomoon etc)
✅ │   │ ├ 📂vendor - any vendor libs libs we want to use
✅ │   │ │ ├ 📂tailwindCss - folder per vendor style library
✅ │   │ │ └ screen.scss - imports all vendor styles 
✅ │   │ ├ 📂shared - any shared styles we want available sitewide (eg typography)
✅ │   │ ├ 📂views - page specific styles (⚠ use with caution)
✅ │   │ ├ 📄reset.scss - basic css reset
✅ │   │ ├ 📄screen.scss - import all styles to generate the base css file
✅ │   └ 📂Scripts
✅ │     └ 📂src
✅ │     	 ├ 📄index.tsx - Entry point file that renders the React component tree
✅ │     	 ├ 📂app - contains app-wide setup and layout that depends on all the other folders
✅ │     	 │ ├ 📄store.ts - store setup
✅ │     	 │ ├ 📄rootReducer.ts - root reducer (optional)
✅ │     	 │ ├ 📄main.tsx - wrap the app with providers (eg routing)
✅ │     	 │ └ 📄App.tsx - root React component
✅ │     	 ├ 📂common - contains truly generic and reusable utilities and components
✅ │     	 │ ├ 📂components
✅ │     	 │ │ ├ 📂chrome - app containers & wrappers
✅ │     	 │ │ ├ 📂charts
✅ │     	 │ │ │ ├ 📂lineChart
✅ │     	 │ │ │	└ (other charts)
✅ │     	 │ │ ├ 📂asteriod
✅ │     	 │ │ │ ├ 📂atoms
✅ │     	 │ │ │ ├ 📂molecules
✅ │     	 │ │ │ └ 📄index.ts
✅ │     	 │ │ └ 📄index.ts
✅ │        │ ├ 📂api - where we can define the APIs that we wish to use
✅ │        │ │ └ 📄webapi.ts
✅ │     	 │ ├ 📂hooks
✅ │     	 │ ├ 📂utils
✅ │     	 │ │ ├ 📂charts
✅ │     	 │ │ ├ 📂links
✅ │     	 │ │ └ (etc)
✅ │     	 │ └ (other shared logic)
✅ │     	 ├ 📂features - folders that contain all functionality related to a specific feature
✅ │     	 │ ├ 📂errorsOverTimeChart
✅ │     	 │ │ ├ 📄errorsOverTimeChartSlice.ts - "duck"-style file that contains a call to RTK's
✅ │     	 │ │ │	!! This is the network calls to the API
✅ │     	 │ │ └ 📄ErrorsOverTimeChart.tsx - component
✅ │     	 │ └ (etc)
✅ │     	 ├ 📂screens - specific screens, making use of features, split by folders
✅ │     	 │ ├ 📂crashReporting - crash reporting specific screens
✅ │     	 │ ├ 📂realUserMonitoring - real user monitoring specific screens
✅ │     	 │ ├ 📂applicationPerformanceMonitoring - application performance monitoring specific screens
✅ │     	 │ ├ 📂authentication - authentication specific screens
✅ │     	 │ ├ 📂planSettings - plan setting specific pages
✅ │     	 │ └ (etc)
✅ │     	 ├ 📂typings - vendor & dependency types
✅ │     	 ├ 📂snowplow - snowplow components & configuration
✅ │     	 └ 📂vendor - any vendor scripts we want to use go in here (⚠ use with caution)
✅ ├ 📂Views - c# razor pages
✅ ├ 📂Controllers - c# controllers
✅ ├ 📂Models - c# models
✅ ├ 📄package.json - project dependencies
🚧 ├ 📄yarn.lock - lockfile commited
✅ ├ 📄jestconfig.json - jest testing config
✅ ├ 📄tsconfig.json - TS project config
✅ ├ 📄tslint.json - TS lint settings
🚧 └ 📄Gruntfile.js - base gruntfile