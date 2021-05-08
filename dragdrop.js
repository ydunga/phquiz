const containers = document.querySelectorAll('.wrapper');

const droppable = new Draggable.Droppable(containers, { //register dropzones as containers
  draggable: '.draggable',
  dropzone: '.dropzone',
  mirror: {
    constrainDimensions: true, //prevent element from shrinking while being dragged
  },
});

let droppableOrigin;
// --- Draggable events --- //
droppable.on('drag:start', (evt) => {
  //If drag then: 
  droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
});



droppable.on('droppable:dropped', (evt) => {
  if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
    //if dropped into wrong container then: 
    evt.cancel();
  }
});

droppable.on('droppable:returned', (evt) => {
  if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
    //if dropped into wrong container then: 
    evt.cancel();
    
  }
});