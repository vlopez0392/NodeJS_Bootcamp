const {
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchbyId,
} = require('../../models/launches.model')

async function httpGetAllLaunches(req, res){
    res.status(200).json(await getAllLaunches())
}

async function httpAddNewLaunch(req, res){
    const launch = req.body;

    //Bad-request from client if client input launch data is missing
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({error: 
            "Missing required launch property"
        });
    }
    
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({error: 
            "Invalid launch date"
        });
    }

    await scheduleNewLaunch(launch)
    return res.status(201).json(launch)
}

function  httpAbortLaunch(req,res){
    const launchId = Number(req.params.id); 

    if(!existsLaunchWithId(launchId)){
        return res.status(404).json({
            error: "Launch not found", 
        });
    }
    const aborted = abortLaunchbyId(launchId)
    return res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};