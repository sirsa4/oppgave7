const handleRequest = async (response)=>{
    const data = await response.json();
    if(response.ok){
        return data;
    }
    return Promise.reject(data);
}

const request = async (url)=>{
    const config = {
        method: 'GET',
    }
    const response = await fetch(url,config);
    return handleRequest(response);
}

export {request}