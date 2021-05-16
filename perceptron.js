document.addEventListener('DOMContentLoaded', () => {
    const num0 = '111101101101111'.split('');
    const num1 = '001001001001001'.split('');
    const num2 = '111001111100111'.split('');
    const num3 = '111001111001111'.split('');
    const num4 = '101101111001001'.split('');
    const num5 = '111100111001111'.split('');
    const num6 = '111100111101111'.split('');
    const num7 = '111001001001001'.split('');
    const num8 = '111101111101111'.split('');
    const num9 = '111101111001111'.split('');

    const num51 = '111100111000111'.split('');
    const num52 = '111100010001111'.split('');
    const num53 = '111100011001111'.split('');
    const num54 = '110100111001111'.split('');
    const num55 = '110100111001011'.split('');
    const num56 = '111100101001111'.split('');

    const nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
    const nums2 = [num51, num52, num53, num54, num55, num56];

    const weights = Array.from({ length: 15 }, () => 0);
    const bias = 7;

    function proceed(num) {
        let net = 0;
        for (let i = 0; i < num.length; i++) {
            net += Number(num[i]) * weights[i];
        }
        return net >= bias;
    }

    function increase(num) {
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) === 1) {
                weights[i] += 1;
            }
        }
    }

    function decrease(num) {
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) === 1) {
                weights[i] -= 1;
            }
        }
    }

    function train() {
        for (let i = 0; i < 100_000; i++) {
            const options = Math.floor(Math.random() * 10);
            if (options !== 5) {
                if (proceed(nums[options])) {
                    decrease(nums[options]);
                }
            } else {
                if (!proceed(num5)) {
                    increase(num5);
                }
            }
        }
    }

    function createNumberUI(number, idx) {
        const br = document.createElement('br');
        const wrapper = document.createElement('div');
        const numberName = document.createElement('span');
        let neuron;

        wrapper.classList.add('wrapper');
        wrapper.style.width = '30px';
        wrapper.style.position = 'relative';
        wrapper.style.display = 'grid';
        wrapper.style.gridTemplateRows = '10px 10px 10px 10px 10px';
        wrapper.style.gridTemplateColumns = '10px 10px 10px';
        numberName.textContent = `5.${idx + 1}`;
        numberName.style.position = 'absolute';
        numberName.style.top = '50%';
        numberName.style.right = '-30px';

        for (let i = 0; i < number.length; i++) {
            neuron = document.createElement('div');
            neuron.style.height = '10px';
            neuron.style.width = '10px';
            neuron.style.backgroundColor = number[i] > 0 ? '#000' : 'white';
            wrapper.appendChild(neuron);
        }

        wrapper.appendChild(numberName);
        wrapper.appendChild(br);
        document.body.appendChild(wrapper);
    }

    function renderNumsUI(nums) {
        nums.forEach((num, idx) => {
            createNumberUI(num, idx);
        })
    }

    renderNumsUI(nums2);

    train();

    console.log("0 это 5? ", proceed(num0));
    console.log("1 это 5? ", proceed(num1));
    console.log("2 это 5? ", proceed(num2));
    console.log("3 это 5? ", proceed(num3));
    console.log("4 это 5? ", proceed(num4));
    console.log("6 это 5? ", proceed(num6));
    console.log("7 это 5? ", proceed(num7));
    console.log("8 это 5? ", proceed(num8));
    console.log("9 это 5? ", proceed(num9), '\n');

    console.log("Узнал 5? ", proceed(num5));
    console.log("Узнал 5 по 5.1? ", proceed(num51));
    console.log("Узнал 5 по 5.2? ", proceed(num52));
    console.log("Узнал 5 по 5.3? ", proceed(num53));
    console.log("Узнал 5 по 5.4? ", proceed(num54));
    console.log("Узнал 5 по 5.5? ", proceed(num55));
    console.log("Узнал 5 по 5.6? ", proceed(num56));

    console.log(weights, num51);
})