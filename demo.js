const providerLegs = [];

const getMany = (filter) => {
    return providerLegs.filter(e => e.company === filter)
}

const createProviderLeg = ({company, flight}) => {
    providerLegs.push({
        company,
        flight,
        created: new Date()
    })
}
createProviderLeg({company: 'SpaceY', flight: '4424'});
createProviderLeg({company: 'SpaceY', flight: '5656'});
createProviderLeg({company: 'SpaceY', flight: '656'});
createProviderLeg({company: 'SpaceX', flight: '656'});
createProviderLeg({company: 'SpaceX', flight: '656'});

console.log(getMany('SpaceY'));
