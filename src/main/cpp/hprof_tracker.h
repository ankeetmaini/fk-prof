#ifndef HPROF_TRACKER_H
#define HPROF_TRACKER_H

#include <jni.h>
#include <fstream>
#include <atomic>

#define TRACKER_CLASS_NAME "com/sun/demo/jvmti/hprof/Tracker"
#define TRACKER_CLASS_SIG "L" TRACKER_CLASS_NAME ";"

#define TRACKER_ENGAGED_NAME               "engaged"
#define TRACKER_ENGAGED_SIG                "I"

#define TRACKER_NEWARRAY_NAME        "NewArray"
#define TRACKER_NEWARRAY_SIG         "(Ljava/lang/Object;)V"
#define TRACKER_NEWARRAY_NATIVE_NAME "nativeNewArray"
#define TRACKER_NEWARRAY_NATIVE_SIG  "(Ljava/lang/Object;Ljava/lang/Object;)V"

#define TRACKER_OBJECT_INIT_NAME        "ObjectInit"
#define TRACKER_OBJECT_INIT_SIG         "(Ljava/lang/Object;)V"
#define TRACKER_OBJECT_INIT_NATIVE_NAME "nativeObjectInit"
#define TRACKER_OBJECT_INIT_NATIVE_SIG  "(Ljava/lang/Object;Ljava/lang/Object;)V"

void set_tracking(JNIEnv *jni, bool on);

struct AllocRecorder {
    std::ofstream out;
    const char* file;
    
    AllocRecorder(const char* _file) : file(_file) {
        out.open(file, std::ios_base::out | std::ios_base::trunc);
        out << "sz cid\n";
        out.close();
    }
    ~AllocRecorder() {}
    void open();
    void close();
};

#endif