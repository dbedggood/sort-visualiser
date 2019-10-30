const graph = document.getElementById('graph')
let numBars = 100
const initialBars = createOrderedBarsArray(numBars)
plotGraph(initialBars)

function newGraph() {
  numBars = document.getElementById('num-bars').value
  const newBars = createOrderedBarsArray(numBars)
  plotGraph(newBars)
}

function createOrderedBarsArray(numBars) {
  let bars = []
  for (var i = 1; i <= numBars; i++) {
    bars.push(i)
  }
  return bars
}

function plotGraph(bars) {
  Plotly.newPlot(
    'graph',
    [
      {
        y: bars,
        type: 'bar'
      }
    ],
    {
      xaxis: {
        showticklabels: false
      },
      yaxis: {
        showticklabels: false
      }
    },
    { responsive: true, staticPlot: true, displayModeBar: false }
  )
}

function animateBars(bars) {
  Plotly.animate(
    graph,
    {
      data: [
        {
          y: bars,
          type: 'bar'
        }
      ]
    },
    {
      transition: {
        duration: 500,
        easing: 'cubic-in-out'
      },
      frame: {
        duration: 500
      }
    }
  )
}

function randomiseBars() {
  const orderedBars = createOrderedBarsArray(numBars)
  const randomisedBars = shuffle(orderedBars)
  animateBars(randomisedBars)
}

function shuffle(shuffleArray) {
  var currentIndex = shuffleArray.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = shuffleArray[currentIndex]
    shuffleArray[currentIndex] = shuffleArray[randomIndex]
    shuffleArray[randomIndex] = temporaryValue
  }

  return shuffleArray
}
