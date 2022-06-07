import { render, screen } from '@testing-library/react';
import { List } from '../List';

const mockListItems = [
  {
    id: '1231',
    someItem: 'item one to render',
  },
  {
    id: '1232',
    someItem: 123456789,
  },
  {
    id: '1233',
    someItem: <>item three to render</>,
  },
];

describe('List', () => {
  it('should render all React nodes passed to it', () => {
      render(<List listItems={mockListItems} />);

      expect(screen.getByText('item one to render')).toBeInTheDocument();
      expect(screen.getByText('123456789')).toBeInTheDocument();
      expect(screen.getByText('item three to render')).toBeInTheDocument();

  });
});
