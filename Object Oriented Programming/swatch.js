function stopWatch() {
    let startTime , stopTime ,runTime, duration = 0;
    this.start = function () {
        if(runTime)
        return new Error("Already Start.");
        runTime = true;
        startTime = new Date();
        };

        this.stop = function() {
            if(!runTime)
            return new Error("not started yet.");
            runTime = false;
            stopTime = new Date();

            const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };
        this.reset = function() {
            startTime = null;
            stopTime = null;
            runTime = false;
            duration = 0;
        };
        Object.defineProperty(this,'duration',{
            get: function() {return duration;}
        });
}