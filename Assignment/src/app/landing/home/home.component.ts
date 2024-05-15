import { Component } from '@angular/core';

interface Task {
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: Task[] = [
    {
      description: 'The website responsive 100%'
    },
    {
      description: 'Create a new Angular 7+ project using Angular CLI as the foundation.'
    },
    {
      description: ' Develop a page layout comprising a header and a horizontally centered, paginated users list.'
    },
    {
      description: "Utilize the HTTP endpoints:\n\n\u25CF Fetch user card data (including avatar image, first_name, last_name, and id) from https://reqres.in/api/users?page={page} for pagination.\n\n\u25CF Fetch details for a single user via https://reqres.in/api/users/{id}."
    },
    {
      description: `Navigation:
      ● Enable click functionality on the user cards to navigate to a new page displaying
      detailed information about the selected user.`
    },
    {
      description:` Search Functionality:
      ● Implement an instant search field within the header to search for users by ID without requiring a separate button. Display search results and allow navigation
      to the user details page if the user exists.`
    },
    {
      description: `User Details Page:
      ● Include a back button on each individual user's page to navigate back to the main user list.
`      
    },
    {
      description: `Caching Implementation:
      ● Introduce caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.`
    },
    {
      description: `User Experience Enhancements:
      ● Display a loading bar to indicate pending network requests, ensuring a smoother
      user experience during data retrieval.`
    },
    {
      description: `Additional Considerations:
      ● Implement custom directives for improved UI interactions or functionalities.
      ● Utilize observables from RxJS to manage asynchronous operations.
      ● Apply proper styling and animations to enhance the user interface.
      ● Ensure a well-documented and structured project codebase.
      Submission Requirements:
      ● Share the project via a Github/Gitlab link or provide a zipped project file that includes all
      necessary files.`
    }
  ];
}