import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserStoriesService } from '../services/user-stories.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit, OnDestroy{

  @Input() idProject: string;

  taskGroups: any[];
  taskGroupsSubscription: Subscription;

  taskGroupsIds: any[];

  constructor(private tasksService: UserStoriesService) { }

  ngOnInit() {
    this.taskGroupsSubscription = this.tasksService.taskGroupsSubject.subscribe(
      (taskGroups: any[]) => {
        this.taskGroups = taskGroups;
      }
    );
    this.tasksService.emitTaskGroups();
  }

  ngOnDestroy() {
    this.taskGroupsSubscription.unsubscribe();
  }
  
  onTaskDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  
}
