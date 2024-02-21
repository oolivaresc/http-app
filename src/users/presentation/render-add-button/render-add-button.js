import './render-add-button.css'
import { showModal } from '../render-modal/render-modal'

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => void} callback 
 */
export const renderAddButton = (element, callback) => {
    const faButton = document.createElement('button');
    faButton.innerText = '+';
    faButton.classList.add('fab-button');

    element.append(faButton);

    faButton.addEventListener('click', () =>{
        //throw Error('No implementado');
        if(!callback) return;
        callback();

        showModal();
    });
}