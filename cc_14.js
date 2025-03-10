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

    ticketCard.addEventListener('click', () => {console.log('Clicked On Support Ticket:', custName.textContent);
    });
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
