export const create_target = (new_id) => {
    return {
        type: 'create',
        new_id
    };
};

export const edit_target = (target) => {
    return {
        type: 'edit',
        target
    };
};

export const delete_target = (target) => {
    return {
        type: 'delete',
        target
    };
};
