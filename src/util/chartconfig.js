
// The global window.Apex variable below can be used to set common options for all charts on the page
Apex = {
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    markers: {
        size: 6,
        hover: {
            size: 10
        }
    },
    tooltip: {
        followCursor: false,
        theme: 'dark',
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                return ''
                }
            }
        }
    },
    grid: {
        clipMarkers: false
    },
    yaxis: {
        tickAmount: 3
    },
    xaxis: {
        type: 'datetime'
    },
}

