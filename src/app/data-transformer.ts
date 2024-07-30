import { NodeModel, ConnectorModel } from '@syncfusion/ej2-angular-diagrams';

interface Person {
  name: string;
  gender: string;
  relationship: string;
  relatedPerson: string;
}

export function transformData(data: Person[]): { nodes: NodeModel[], connectors: ConnectorModel[] } {
  const nodesMap = new Map<string, NodeModel>();
  const connectors: ConnectorModel[] = [];

  data.forEach(({ name, gender, relationship, relatedPerson }) => {
    if (!nodesMap.has(name)) {
      nodesMap.set(name, {
        id: name,
        offsetX: Math.random() * 800, // Adjust as needed
        offsetY: Math.random() * 600, // Adjust as needed
        width: 100,
        height: 50,
        style: {
          fill: gender === 'male' ? '#E3F2FD' : '#FCE4EC', // Blue for male, Pink for female
          strokeColor: '#1E88E5',
          strokeWidth: 2
        },
        annotations: [{ content: name, style: { color: '#1E88E5', fontSize: 14 } }]
      });
    }

    if (!nodesMap.has(relatedPerson)) {
      nodesMap.set(relatedPerson, {
        id: relatedPerson,
        offsetX: Math.random() * 800, // Adjust as needed
        offsetY: Math.random() * 600, // Adjust as needed
        width: 100,
        height: 50,
        style: {
          fill: gender === 'male' ? '#E3F2FD' : '#FCE4EC',
          strokeColor: '#1E88E5',
          strokeWidth: 2
        },
        annotations: [{ content: relatedPerson, style: { color: '#1E88E5', fontSize: 14 } }]
      });
    }

    connectors.push({
      sourceID: name,
      targetID: relatedPerson,
      style: { strokeColor: '#BDBDBD', strokeWidth: 2 },
      type: 'Orthogonal',
      // Optionally, you can set connector labels or other properties based on relationship
    });
  });

  return {
    nodes: Array.from(nodesMap.values()),
    connectors
  };
}
