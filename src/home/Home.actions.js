export const create_target = (new_id) => {
    return {
        type: 'create-target',
        new_id
    };
};

export const edit_target = (target) => {
    return {
        type: 'edit-target',
        target
    };
};

export const view_target = (target) => {
    return {
        type: 'view-target',
        target
    };
};

export const delete_target = (target_id) => {
    return {
        type: 'delete-target',
        target_id
    };
};
