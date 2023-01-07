function openModal(mn, mm) {
    let modal = document.getElementById(mn);
    let modal2 = document.getElementById(mm);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    modal2.style.display = 'Block'
    document.body.style.overflow = 'hidden';

    console.log(modal2)
    
}

function closeModal(mn,mm) {
    let modal = document.getElementById(mn);
    let modal2 = document.getElementById(mm);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    modal2.style.display = 'none'
    document.body.style.overflow = 'auto';
}

let content = document.getElementById("dv-modal-content");
content.click = ($event) => {$event.stopPropagation();}