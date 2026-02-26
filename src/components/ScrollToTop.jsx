import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the window when the route changes.
 * 
 * @param {Object} props
 * @param {'smooth' | 'auto'} [props.behavior='smooth'] - The scroll behavior (can be toggled to 'auto' for instant jump).
 * @param {boolean} [props.enabled=true] - Toggle scrolling (useful for future compatibility with page transition animations).
 */
export default function ScrollToTop({ behavior = 'smooth', enabled = true }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!enabled) return;

        // Reset scroll position on route change
        window.scrollTo({
            top: 0,
            left: 0,
            behavior,
        });
    }, [pathname, behavior, enabled]);

    // This component doesn't render any UI
    return null;
}
