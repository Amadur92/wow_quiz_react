let initialState = {
    gameName: "game1",
    roundCount: 9,
    teamCount: 1,
    result: [{
      teamName: 'team 1',
      wowRounds: [undefined, undefined],
      gameResult: Array(9).fill(0),
      sum: 0
    }],
  }

const tableReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case "ADD-NEW-TEAM": {
          let newTeam = {
            teamName: '',
            wowRounds: [undefined, undefined],
            gameResult: Array(9).fill(0),
            sum: 0
          }
          state.teamCount++
          state.result.push(newTeam)
          break
        }
        
        default: {
          
        }
      }
  

    
    return state
}

export default tableReducer