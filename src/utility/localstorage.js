const getStoredApplication = () => {
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return []
}

const saveAppliedJOb = id => {
    const storedApplications = getStoredApplication();
    const exists = storedApplications.find(jobId => jobId === id)
    if(!exists){
        storedApplications.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedApplications))
    }
}

export {saveAppliedJOb, getStoredApplication};