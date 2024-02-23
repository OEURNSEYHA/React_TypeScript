type statusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status({status} : statusProps) {

  let message;
    if(status === "loading"){
    message = "loading...";
  }else if(status === "success"){
    message === "Data fetched successfully"
  }else if(status === "error"){
    message = "Error fetched data"
  }
  
    return (
    <>

    <h1>status- {status} {message}</h1>
        {/* <h1>Loading...</h1>
        <h1>Data fetched successfully!</h1>
        <h1>Error fetching Data</h1> */}
    </>
  )
}

export default Status