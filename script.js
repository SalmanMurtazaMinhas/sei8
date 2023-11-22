const slotSymbols = [
  ['Kawther','Kawther', 'ZainabA', 'Noor','ZainabA', 'Sami', 'Hasan', 'Dawood'],
  ['Majid','Majid', '-', 'Amira','-', '-', 'ZainabS', 'Raja'],
  ['Abbas','Abbas', 'Saud',  'SayedE','Saud', 'Zahra', 'Hussain', 'Bashayer']
];

const spinButton = document.querySelector('.spin-button')

  const meme01 = document.querySelector('.meme01')
  const meme02 = document.querySelector('.meme02')
  const meme03 = document.querySelector('.meme03')
  const meme04 = document.querySelector('.meme04')
  const meme05 = document.querySelector('.meme05')
  const meme06 = document.querySelector('.meme06')

  const spinAudio = document.querySelector('.spin-audio')
  const audio = document.querySelector('audio')
  const memeAudio01 = document.querySelector('.meme-audio-01')
  const memeAudio02 = document.querySelector('.meme-audio-02')
  const memeAudio03 = document.querySelector('.meme-audio-03')
  const memeAudio04 = document.querySelector('.meme-audio-04')
  const memeAudio05 = document.querySelector('.meme-audio-05')
  const memeAudio06 = document.querySelector('.meme-audio-06')

  spinButton.addEventListener('click', () => {
    // console.log('sudio')
    spinAudio.play()
  })

  meme01.addEventListener('click', () => {
    memeAudio01.play()
  })

  meme02.addEventListener('click', () => {
    memeAudio02.play()
  })

  meme03.addEventListener('click', () => {
    memeAudio03.play()
  })

  meme04.addEventListener('click', () => {
    memeAudio04.play()
  })

  meme05.addEventListener('click', () => {
    memeAudio05.play()
  })

  meme06.addEventListener('click', () => {
    memeAudio06.play()
  })
    function createSymbolElement(symbol) {
      const div = document.createElement('div');
      div.classList.add('symbol');
      div.textContent = symbol;
      return div;
    }

    let spun = false;
    function spin() {
      if (spun) {
        reset();
      }
      const slots = document.querySelectorAll('.slot');
      let completedSlots = 0;

      slots.forEach((slot, index) => {
        const symbols = slot.querySelector('.symbols');
        const symbolHeight = symbols.querySelector('.symbol')?.clientHeight;
        const symbolCount = symbols.childElementCount;
        console.log('symbolcount' , symbolCount)

        symbols.innerHTML = '';

        symbols.appendChild(createSymbolElement('???'));

        for (let i = 0; i < 50; i++) {
          slotSymbols[index ].forEach(symbol => {
            symbols.appendChild(createSymbolElement(symbol));
            // slotSymbols[0].splice(0,1)
          });
        }

        const totalDistance = symbolCount * symbolHeight;
        const randomOffset = -Math.floor(0.5 * (symbolCount - 1) + 1) * symbolHeight;
        // console.log(randomOffset)
        symbols.style.top = `${randomOffset}px`;
        
        symbols.addEventListener('transitionend', () => {
          completedSlots++;
          if (completedSlots === slots.length) {
            logDisplayedSymbols();
          }
          
        }, { once: true });

      });

      spun = true;

    }

    function reset() {
      const slots = document.querySelectorAll('.slot');

      memeAudio06.pause()
      memeAudio06.currentTime = 0
      
      slots.forEach(slot => {
        const symbols = slot.querySelector('.symbols');
        symbols.style.transition = 'none';
        symbols.style.top = '0';
        symbols.offsetHeight;
        symbols.style.transition = '';
      });

    }

    function logDisplayedSymbols() {
      // const slots = document.querySelectorAll('.slot');
      // const displayedSymbols = [];

      // slots.forEach((slot, index) => {
      //   const symbols = slot.querySelector('.symbols');
      //   // const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
      //   // console.log(symbolIndex)
      //   symbolIndex=0
      //   const displayedSymbol = slotSymbols[index][symbolIndex];
      //   displayedSymbols.push(displayedSymbol);
      //   const index1 = slotSymbols.indexOf(displayedSymbol[0]);
      //   const index2 = slotSymbols.indexOf(displayedSymbol[1]);
      //   const index3 = slotSymbols.indexOf(displayedSymbol[2]);
      //   console.log('index1',index1)
      //   console.log('indexxx',slotSymbols[index1])
      //   // slotSymbols[0].splice(0,1)
      //   // slotSymbols[1].splice(0,1)
      //   // slotSymbols[2].splice(0,1)
      // });

      // console.log(displayedSymbols);
      // if(displayedSymbols.lenght != 0){
        slotSymbols[0].splice(0,1)
        slotSymbols[1].splice(0,1)
        slotSymbols[2].splice(0,1)
        console.log(slotSymbols)
      // }
    }

    spin();
