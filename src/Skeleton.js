const Skeleton = props =>{
    return   <div className="App">
      <ThemeProvider theme={theme}>
        {/* Header Here */}
            {props.children}
        {/* Footer Here */}
      </ThemeProvider>
    </div>
}