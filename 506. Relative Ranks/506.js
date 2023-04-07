// 506. Relative Ranks solution in JavaScript
// https://leetcode.com/problems/relative-ranks/description/

/**
 * @param {number[]} score
 * @return {string[]}
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

var findRelativeRanks = function(score) {
    const ranks = new MaxPriorityQueue();

    for (let i = 0; i < score.length; i++) {
        ranks.enqueue(i, score[i]);
    }

    for (let i = 0; i < score.length; i++) {
        const item = ranks.dequeue();

        let rank;

        switch(i) {
            case 0:
                rank = "Gold Medal";
                break;
            case 1:
                rank = "Silver Medal";
                break;
            case 2:
                rank = "Bronze Medal";
                break;
            default:
                rank = (i + 1).toString();
        }

        score[item.element] = rank;
    }

    return score;
};