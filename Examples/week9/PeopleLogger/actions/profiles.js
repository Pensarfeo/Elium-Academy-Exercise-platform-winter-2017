//Fetch Todo Data
//import fetchProfiles from '../storage/delayed'

// Define the action parapeter to be passed to the dispatch method that will trigger the store
/*----------------------- Create Profile -----------------------*/
export const ProfileCreate = (profile) => ({
    type: 'profile_create',
    data: profile
});



export const ProfileCreateAsync = (data, cb) => {
    return dispatch => {
        axios.post('http://localhost:3000/people', data)
          .then(function (response) {
                dispatch(ProfileCreate(response.data))
                cb(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}

/*----------------------- Edit Profile -----------------------*/
export const ProfileEdit = (profile) => ({
    type: 'profile_edit',
    data: profile
});

export const ProfileEditAsync = (data, cb) => {
    return dispatch => {
        axios.post('http://localhost:3000/people/update', data)
          .then(function (response) {
            dispatch(ProfileEdit(response.data))
            cb()
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}

/*----------------------- Delete Profile -----------------------*/
export const ProfileDelete = (profile) => ({
    type: 'profile_delete',
    data: profile
});

export const ProfileDeleteAsync = (data, cb) => {
    return dispatch => {
        axios.post('http://localhost:3000/people/delete', data)
          .then(function (response) {
            dispatch(ProfileDelete(data))
            cb()
          })
          .catch(function (error) {
            console.log(error);
          });
    };
}





/*----------------------- Fetch Profile -----------------------*/

export const FetchProfiles = (profiles) => ({
    type: 'profile_fetch',
    data: profiles
});

export const FetchProfilesAsync = () => {
    return dispatch => {
        axios.get('http://localhost:3000/people')
            .then(function(response) {
                dispatch(FetchProfiles(response.data))

            })
            .catch(function(error) {
                console.log(error);
            });
    };
}