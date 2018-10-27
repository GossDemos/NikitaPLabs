cmd: "<command to execute>"
name: "<name of target>"
args:
  - <argument1>
  - <argument2>
sh: true,
cwd: <current working directory for `cmd`>
env:
  VARIABLE1: "VALUE1"
  VARIABLE2: "VALUE2"
errorMatch:
  - ^regexp1$
  - ^regexp2$
warningMatch:
  - ^regexp1$
  - ^regexp2$
keymap: <keymap string>
atomCommandName: namespace:command
targets:
  extraTargetName:
      cmd: "<command to execute>"
      args:
      # (any previous options are viable here except `targets` itself)
