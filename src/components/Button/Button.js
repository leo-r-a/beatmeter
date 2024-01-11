import * as Tone from 'tone'


function Button() {

  const now = Tone.now() 
  const sample = new Tone.Player ("       ") .toDestination();
  Tone.loaded().then(()=> {
    Player.start();
  }) 

  sample.triggerAttack("sample", now)

 const trigger = () => {
    async () => {
        await Tone.start(sound)
    }
 }
    return(
        <button className="button" onClick={(trigger)}></button>
    );
};

export default Button;
