import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ProjectService } from './project.service';
import { ProjectNotFoundComponent } from './projectNotFound/projectNotFound.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @Input() day!: string;
  @ViewChild('projectHost', { read: ViewContainerRef, static: false })
  projectHost!: ViewContainerRef;
  private componentRef: ComponentRef<any> | null = null;

  constructor(private projectService: ProjectService) {}

  ngAfterViewInit(): void {
    const day = Number(this.day);

    if (day) this.loadComponent(day);
  }

  cleanUp(): void {
    if (this.componentRef) this.componentRef.destroy();
    this.projectHost.clear();
  }

  resolveComponent(day: number): Type<any> {
    const project = this.projectService.getProjectByDay(day);

    return project?.component || ProjectNotFoundComponent;
  }

  injectComponent(componentToInject: Type<any>): void {
    this.componentRef = this.projectHost.createComponent(componentToInject);
  }

  loadComponent(day: number): void {
    this.cleanUp();

    const componentToLoad = this.resolveComponent(day);

    this.injectComponent(componentToLoad);
  }

  ngOnDestroy(): void {
    if (this.componentRef) this.componentRef.destroy();
  }
}
