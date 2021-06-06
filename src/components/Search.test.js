import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Search from './Search';

describe('Send Search requests to database', () => {
    test('onChange triggers handleInput', async () => {
        const handleInput = jest.fn();
        const wrapper = render(<Search handleInput={handleInput} />);
        const input = await wrapper.findByTestId('searchInput');
        userEvent.type(input, 'hello world')
        expect(handleInput).toHaveBeenCalled()
    });

    test('onKeyPress triggers search', () => {
        render(<Search />);
    });
})