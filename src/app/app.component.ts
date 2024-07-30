import { Component, ViewChild } from '@angular/core';

import { registerLicense } from '@syncfusion/ej2-base';
import { DiagramComponent, NodeModel, ConnectorModel, Diagram, DiagramTools, DataBinding, ComplexHierarchicalTree, LayoutModel, SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-angular-diagrams';
import { DataManager } from '@syncfusion/ej2-data';

Diagram.Inject(DataBinding, ComplexHierarchicalTree);
export interface DataInfo {
    [key: string]: string;
}

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXhceXRTQmFYU0dxVkU=');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('diagram')
  public diagram?: DiagramComponent;

  public width: string = '1000px';
  public height: string = '600px';

  // Define node data with custom styling
  public nodes: NodeModel[] = [
    { id: 'JosephMaina', offsetX: 200, offsetY: 50, width: 100, height: 50, style: { fill: '#DCE6F1', strokeColor: '#2A2A2A', strokeWidth: 2 }, annotations: [{ content: 'Joseph Maina', style: { color: '#2A2A2A', fontSize: 14 } }] },
    { id: 'PatienceMaina', offsetX: 400, offsetY: 50, width: 100, height: 50, style: { fill: '#DCE6F1', strokeColor: '#2A2A2A', strokeWidth: 2 }, annotations: [{ content: 'Patience Maina', style: { color: '#2A2A2A', fontSize: 14 } }] },
    { id: 'PatrickMaina', offsetX: 300, offsetY: 150, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Patrick Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'JamesMaina', offsetX: 100, offsetY: 150, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'James Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'ElizabethNafula', offsetX: 500, offsetY: 150, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Elizabeth Nafula', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'RobertMwangi', offsetX: 100, offsetY: 250, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Robert Mwangi', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'SimonMaina', offsetX: 350, offsetY: 250, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Simon Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'RubyMaina', offsetX: 500, offsetY: 250, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Ruby Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'FaithWanjiru', offsetX: 650, offsetY: 250, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Faith Wanjiru', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'SkyMaina', offsetX: 200, offsetY: 350, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Sky Cheptoo Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
    { id: 'PerisMaina', offsetX: 400, offsetY: 350, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Peris Maina', style: { color: '#1E88E5', fontSize:14 } }] },
    { id: 'BrianMaina', offsetX: 550, offsetY: 350, width: 100, height: 50, style: { fill: '#E3F2FD', strokeColor: '#1E88E5', strokeWidth: 2 }, annotations: [{ content: 'Brian Maina', style: { color: '#1E88E5', fontSize: 14 } }] },
  ];

  // Define connectors with custom styling
  public connectors: ConnectorModel[] = [
    { sourceID: 'JosephMaina', targetID: 'PatrickMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'JosephMaina', targetID: 'PatienceMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'JosephMaina', targetID: 'JamesMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'PatrickMaina', targetID: 'ElizabethNafula', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'PatrickMaina', targetID: 'RobertMwangi', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'PatrickMaina', targetID: 'SimonMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'PatrickMaina', targetID: 'FaithWanjiru', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'SimonMaina', targetID: 'RubyMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'SimonMaina', targetID: 'SkyMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'SimonMaina', targetID: 'PerisMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
    { sourceID: 'SimonMaina', targetID: 'BrianMaina', style: { strokeColor: '#BDBDBD', strokeWidth: 2 }, type: 'Orthogonal' },
  ];

  public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };

  // Layout settings
  public layout: LayoutModel = {
    type: 'HierarchicalTree',
    horizontalSpacing: 30,
    verticalSpacing: 50,
    getLayoutInfo: (node: NodeModel, parentNode: NodeModel) => {
      return { x: node.offsetX, y: node.offsetY };
    }
  };
}