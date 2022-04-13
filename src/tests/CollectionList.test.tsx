import { render, screen } from '@testing-library/react';
import CollectionList from '../components/CollectionList/CollectionList';

describe('CollectionList Component', () => {
    test('renders collection List', () => {
        render(<CollectionList />);

        const noData = screen.getByText('No data');
        expect(noData).toBeInTheDocument();
    })
});