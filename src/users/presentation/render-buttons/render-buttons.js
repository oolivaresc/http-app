import usersStore from '../../store/users-store'
import { renderTable } from '../render-table/render-table'
import './render-buttons.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next >';

    const previewButton = document.createElement('button');
    previewButton.innerHTML = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(previewButton, currentPageLabel, nextButton);


    nextButton.addEventListener('click', async()=>{
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    previewButton.addEventListener('click', async()=>{
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
}