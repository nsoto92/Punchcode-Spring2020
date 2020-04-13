alert(
  `> You wake up inside the Cryosleep Chamber you went into after programming your spaceship's route and you cannot remember anything.\n
   > The chamber is no longer working and you can hear alarms going off in the background...`
)

var exit = confirm(
  `> You realize your upper torso is loose and can move around the damaged chamber.\n
   > Press CONFIRM to pat yourself down for clues.\n
   > Press CANCEL to attempt to reach the outside handle to open the door.`
)

if (exit) {
  var name = prompt(
    "> You pat yourself and feel a card in your chest pocket. It’s the credentials for the spaceship’s pilot, which seems to be you. You read the name next to your picture:"
  )
  if (name) {
    alert(
      `> ` +
        name +
        `, reads the id. You scan the id on the door and let yourself out.\n 
        AI> “Hello, Captain ` +
        name +
        `. Ship Status Report: Critical Structural and Engine damage due to Crash.”`
    )
    alert(
      name +
        `> “Due to crash?, Where?”\n
      AI> “In Romulon Omega, a humanoid inhabited planet.”`
    )

    alert(
      name +
        `>“Humanoids?” “How similar are they to us humans?”\n
      AI> “They are almost identical, with the exclusion that these people’s arms end where a normal person’s elbow would be.”\n` +
        name +
        `> “Lol”\n`
    )
    var ending = confirm(
      `> You decide to disembark in Romulon Omega, but before you do, you have a brilliant idea: Tucking your arms in your sleeves and act like you are one of them in hopes of them being friendly towards you?\n
      > Press CONFIRM to go ahead with the idea.\n
      > Press CANCEL to ignore the idea.`
    )
    if (ending) {
      alert(`> You tuck your arms in, thinking this could be the greatest idea you have ever had.\n
      > As you disembark your spaceship, you find a big gathering of Romulon Omega humanoids around your ship.\n 
      > You feel nervous and surrounded, all you manage to do is wave at them.`)
      alert(`> They see your "short" arms, but can notice there is something weird about them.\n 
      > They seem… offended.\n 
      > A short-armed humanoid that is holding a spear and appears to  be their leader approaches you, and in the weirdest throw motion you have ever seen, chucks the spear at you and impales you in the chest.`)
      alert(
        `> The short armed people form a mob around you and beat you awkwardly with their weird arms. Good job on offending an entire civilization!`
      )
    } else {
      alert(
        `> As you disembark your spaceship, you find a big gathering of Romulon Omega humanoids around your ship.\n  
         > You feel nervous and surrounded, all you manage to do is wave at them.`
      )
      alert(`A huge cheer erupts from the crowd. The have never seen arms so long gracious and amazing!\n 
         > You are a god to them. A god from the heavens.`)
      alert(
        `> You live the rest of your days ruling Romulon Omega in luxury! You Win!!!`
      )
    }
  } else {
    alert(`>GAME OVER`)
  }
} else {
  var alt = confirm(
    `> As you reach out, you hear an automated AI security system alarm\: “Warning: Intruder. Provide identification.”\n 
    > Press CONFIRM to unlock the door quickly and run out.\n 
    > Press CANCEL to identify yourself with the name you\’ve just conveniently remembered.`
  )
  if (alt) {
    alert(
      `> You decide there’s no time to try and remember so you open the door and make a sprint to the nearest doorway.\n
    > You have entered the new room and locked the door behind you.\n 
    > You are in the ship’s loading dock. The lights in the room are flickering, but from what you can tell it looks like the ship crash-landed somewhere.`
    )
    var buttons = confirm(
      `> You see a button panel, with a Red and Green button on it.
    > Press CONFIRM for Red, 
    > Press CANCEL for Green.`
    )
    if (buttons) {
      alert(`> As you press the Red button, you hear:`)

      alert(`AI> “SELF-DESTRUCT SEQUENCE INITIATED, BEGIN 10 SECOND COUNTDOWN”`)
      alert(
        `You helplessly try to override the command but have no way of doing so. The ship explodes in a fiery ball as the counter hit 0.\n
          YOU LOSE.`
      )
    } else {
      alert(
        `> As you hit the Green button, cuffs come out from below the panel and grab you by your feet. “Intruder detected in Loading Docks. Please wait for security to arrive." says the AI.\n
    > After being tied to the panel for 4 days, you realize there is no security in the ship and no one is coming to release you. You last 20 more days tied to the panel.`
      )
    }
  } else {
    alert(
      `> As you say “Weztco” the name you “remembered”, the alarm goes off.
      > As red lights flash, a laser turret drops in from of your door and right as it’s spinning up ready to turn you to laser dust, you read the words Weztco on a can right outside your door and realize where you messed up.`
    )
    alert(`> Good job, champ. You lost :\(`)
  }
}
