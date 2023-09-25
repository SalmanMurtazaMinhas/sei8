const slotSymbols = [
    ['Kawther', 'Noor', 'Zainab A', 'Sami', 'Hasan', 'Dawood'],
    ['Majid', 'Amira', 'Saud', 'Zahra', 'Zainab S', 'Raja'],
    ['Abbas', 'S.Ebrahim', 'S.Ali', ' ', 'Hussain', 'Bashayer']
  ];
  
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
  
          symbols.appendChild(createSymbolElement('❓❓❓'));
  
          for (let i = 0; i < 50; i++) {
            slotSymbols[index ].forEach(symbol => {
              symbols.appendChild(createSymbolElement(symbol));
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
  
        slots.forEach(slot => {
          const symbols = slot.querySelector('.symbols');
          symbols.style.transition = 'none';
          symbols.style.top = '0';
          symbols.offsetHeight;
          symbols.style.transition = '';
        });
      }
  
      function logDisplayedSymbols() {
        const slots = document.querySelectorAll('.slot');
        const displayedSymbols = [];
  
        slots.forEach((slot, index) => {
          const symbols = slot.querySelector('.symbols');
          const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
          const displayedSymbol = slotSymbols[index][symbolIndex];
          displayedSymbols.push(displayedSymbol);
        });
  
        console.log(displayedSymbols);
      }
  
      spin();