/*!
 * Copyright (c) 2017 Adrian Panella <ianchi74@outlook.com>, contributors.
 * Licensed under the MIT license.
 */

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { IMenuNode } from '../shell.interface';

@Component({
  selector: 'app-nav-menu',
  template: `<app-nav-item
    *ngFor="let node of nodes"
    [node]="node"
    [drawer]="drawer"
  ></app-nav-item>`,
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  @Input()
  nodes: IMenuNode[] = [];

  @Input()
  drawer: MatDrawer | undefined;
}
