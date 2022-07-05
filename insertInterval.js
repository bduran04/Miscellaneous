//given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.

var insert = function(intervals, newInterval) {
    //initialize the start and end of the newInterval 
      let [newStart, newEnd] = newInterval;
        //initialize the result in a new empty array 
        const result = [];
        //initialize the index 
        let i = 0;
    
        // Insert all intervals lower than the new interval
        while(i < intervals.length) {
            const [start, end] = intervals[i];
            if(end >= newStart) break;
            result.push([start, end]);
            i += 1;
        }
    
        // Evaluate the upper and lower bounds of the new interval
        while(i < intervals.length) {
            const [start, end] = intervals[i];
            if(start > newEnd) break;
            //Math.min returns the lowest valued number passed into it
            newStart = Math.min(newStart, start);
            //Math.max returns the largest valued number passed into it 
            newEnd = Math.max(newEnd, end);
            i += 1;
        }
        result.push([newStart, newEnd]);
    
        // Insert all the intervals greater than the new interval
        while(i < intervals.length) {
            result.push(intervals[i]);
            i += 1;
        }
    
        return result;
    };