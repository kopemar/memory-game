// https://stackoverflow.com/questions/3144711/find-the-time-left-in-a-settimeout/36389263#36389263

export const getTimeout = (function () { // IIFE
    const _setTimeout = setTimeout, // Reference to the original setTimeout
        map = {}; // Map of all timeouts with their start date and delay

    setTimeout = function (callback, delay) { // Modify setTimeout
        const id = _setTimeout(callback, delay); // Run the original, and store the id

        map[id] = [Date.now(), delay]; // Store the start date and delay

        return id; // Return the id
    };

    return function (id) { // The actual getTimeLeft function
        const m = map[id]; // Find the timeout in map

        // If there was no timeout with that id, return NaN, otherwise, return the time left clamped to 0
        return m ? Math.max(m[1] - Date.now() + m[0], 0) : NaN;
    }
})();