const _elementId = 'chatSound';
const _buttonDivId = 'kn0pjesDiv';
// const _buttonHeader = 'kn0pjesHeader';
const _buttonDiv = document.querySelector(`#${_buttonDivId}`);

waitForElm(`#${_elementId}`).then(() => {
    silenceTheScreams();
    whoNeedsUIAnyway();
});

function silenceTheScreams() {
    const _checkbox = document.querySelector(`#${_elementId}`);

    if (_checkbox) {
        const _label = document.querySelector(`label[for="${_elementId}"]`);
        _label.innerHTML = "Ik kom hier voor m'n rust";
        _checkbox.checked = false;
        _checkbox.disabled = true;
        _checkbox.style.display = 'none';
    }
}

function whoNeedsUIAnyway() {
    if (_buttonDiv) {
        _buttonDiv.style.display = 'flex';
        _buttonDiv.style.gap = '12px';
        _buttonDiv.style.flexDirection = 'column';
        _buttonDiv.querySelectorAll('br').forEach((e) => e.remove());
    }
}

// Wait For Elem: Thanks, StackOverflow
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}