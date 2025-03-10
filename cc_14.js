//task 2: adding support tickets dynamically 
function createSupportTicket(customer, issue, priority)
{
    let divTicketContainer = document.getElementById('ticketContainer'); //support tickets will be added to this main container
    const ticketCard = document.createElement('div'); //creating an element to create a support ticket
    ticketCard.setAttribute('class','ticket-card'); //setting attributes

    const custName = document.createElement('h2'); //a heading for the customer's name
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);

    const issueParagraph = document.createElement('p'); //adding a paragraph to describe the issue for support
    issueParagraph.setAttribute('class', 'issue-description');
    issueParagraph.textContent = issue;
    ticketCard.append(issueParagraph);

    const priorityLabel = document.createElement('p'); //adding a label to show the issue's priority
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    ticketCard.classList.add('other-priority'); //will show with tickets that aren't a priority
    ticketCard.append(priorityLabel); //appending support ticket to ticketContainer

    const resolveBtn = document.createElement('button'); //creates a button that will resolve support tickets when clicked
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn); 

//task 4: implementing ticket resolution with even bubbling
resolveBtn.addEventListener('click', (event) => {ticketCard.remove();
event.stopPropagation();});

ticketCard.addEventListener('click', () => {console.log('Clicked On Support Ticket:', custName.textContent);});

//task 5: inline editing of support tickets
ticketCard.addEventListener('dblclick', () => 
{
    if(ticketCard.querySelector('.save-btn'))
    {
        return;
    }
    ticketCard.innerHTML = '';

    const nameInput = document.createElement('input'); //creating a new element to edit customer's name
    nameInput.setAttribute('type', 'text');
    nameInput.value = custName.textContent;

    const issueInput = document.createElement('input'); //creating a new element to edit customer's issue description
    issueInput.setAttribute('type', 'text');
    issueInput.value = issueDesc.textContent;

    const priorityInput = document.createElement('input'); //creating a new element to ticket's priority
    priorityInput.setAttribute('type', 'text');
    priorityInput.value = priorityLabel.textContent.replace('Priority: ', '');

    const saveBtn = document.createElement('button'); //creating a new element that will create a save button to update values
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save';

    ticketCard.appendChild(nameInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(issueInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(priorityInput);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(saveBtn);
    ticketCard.appendChild(document.createElement('br'));
    ticketCard.appendChild(resolveBtn);

    saveBtn.onclick = () => {
        custName.textContent = nameInput.value;
        
        issueDesc.textContent = issueInput.value;
        
        priorityLabel.textContent = `Priority: ${priorityInput.value}`;
        
        ticketCard.innerHTML = '';
        ticketCard.append(custName, issueDesc, priorityLabel, resolveBtn);
        
        styleSingleCard(ticketCard)
    };
});

divTicketContainer.appendChild(ticketCard);
styleSingleCard(ticketCard);
return ticketCard;
}

//creating example support tickets
document.addEventListener('DOMContentLoaded', function()
{   
    createSupportTicket('Bruce Wayne', 'Cannot access system', 'High');
    createSupportTicket('Dick Grayson', 'Subscription issue', 'Medium');
    highlightHighPriorityTickets();
});
document.getElementById('addTicketBtn').addEventListener('click', () => 
{
    const currentTicket = createSupportTicket('Jason Todd', 'Batsystem Virus', 'High');
    styleSingleCard(currentTicket);
})

//task 3: converting nodelists to arrays for bulk updates
function highlightHighPriorityTickets()
{
    const highPriorityTickets = document.querySelectorAll('.ticket-card'); //selects all support tickets with high priority
    const arrayTickets = Array.from(highPriorityTickets); //converting nodelist into an array
    arrayTickets.forEach((ticket) => {styleSingleCard(ticket); }) //updates the style of high priority tickets
}

function styleSingleCard(currentCard) //function that will update the style of high-priority tickets
{
    const priority = currentCard.querySelector('.priority-label');
    if(priority.textContent.replace('Priority: ', '').toLowerCase() === 'high')
    {
        currentCard.classList.remove('other-priority');
        currentCard.classList.add('high-priority');
    }
    else
    {
        currentCard.classList.remove('high-priority');
        currentCard.classList.add('other-priority');
    }
}
