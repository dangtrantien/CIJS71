class Clock {
    _interval;

    constructor(timer) {
      this._timer = timer;
  
      this.$clockContainer = document.createElement("div");
      
      this.$timer = document.createElement("h2");
      this.$timer.innerHTML = this._timer;
        
      this.$startBtn = document.createElement("button");
      this.$startBtn.innerText = "Start";
      this.$startBtn.addEventListener('click', this.start);

      this.$pauseBtn = document.createElement("button");
      this.$pauseBtn.innerText = "Pause";
      this.$pauseBtn.addEventListener('click', this.pause);
  
      this.$stopBtn = document.createElement("button");
      this.$stopBtn.innerText = "Stop";
      this.$stopBtn.addEventListener('click', this.stop);
    }

    start = () => {
        this._interval = setInterval(() => {
            this._timer += 1;
            this.$timer.innerText = this._timer;
        }, 1000);
    }

    pause = () => {
        if(this._interval !== undefined){
            clearInterval(this._interval);
        }
    }

    stop = () => {
        if(this._interval !== undefined){
            clearInterval(this._interval);
            this._timer = 0;
            this.$timer.innerText = 0;
        }
    }
  
    render() {
      this.$clockContainer.appendChild(this.$timer);
      this.$clockContainer.appendChild(this.$startBtn);
      this.$clockContainer.appendChild(this.$pauseBtn);
      this.$clockContainer.appendChild(this.$stopBtn);
  
      return this.$clockContainer;
    }
}
  
const main = document.querySelector("#main");
  
  
for (let i = 0; i <= 5; i++) {
    const clock = new Clock(i);
    main.appendChild(clock.render());
}